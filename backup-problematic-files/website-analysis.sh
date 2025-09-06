#!/bin/bash

# Website Analysis Script for Zion Tech Group
# Analyzes the website for broken links, missing content, and other issues

set -e

BASE_URL="https://ziontechgroup.com"
REPORT_FILE="zion-website-analysis-report.md"
JSON_REPORT="zion-website-analysis-report.json"
MAX_DEPTH=3
DELAY=1

# Initialize counters
TOTAL_PAGES=0
BROKEN_LINKS=0
WORKING_LINKS=0
MISSING_CONTENT=0

echo "🚀 Starting comprehensive website analysis of $BASE_URL"
echo "⏰ Started at: $(date)"
echo "---"

# Create report files
cat > "$REPORT_FILE" << EOF
# Zion Tech Group Website Analysis Report

## Summary
- **Base URL**: $BASE_URL
- **Analysis Date**: $(date)
- **Maximum Depth**: $MAX_DEPTH

## Analysis Results

EOF

cat > "$JSON_REPORT" << EOF
{
  "base_url": "$BASE_URL",
  "analysis_date": "$(date)",
  "max_depth": $MAX_DEPTH,
  "total_pages_analyzed": 0,
  "broken_links": [],
  "working_links": [],
  "missing_content": [],
  "performance_issues": [],
  "seo_issues": []
}
EOF

# Function to analyze a single page
analyze_page() {
    local url="$1"
    local depth="$2"
    local max_depth="$3"
    
    if [ "$depth" -gt "$max_depth" ]; then
        return
    fi
    
    echo "🔍 Analyzing page $((depth + 1))/$((max_depth + 1)): $url"
    
    # Check if URL is accessible
    if curl -s -f -o /dev/null --connect-timeout 10 --max-time 30 "$url" 2>/dev/null; then
        echo "✅ Page accessible: $url"
        WORKING_LINKS=$((WORKING_LINKS + 1))
        TOTAL_PAGES=$((TOTAL_PAGES + 1))
        
        # Analyze page content
        analyze_page_content "$url"
        
        # Extract and analyze links if not at max depth
        if [ "$depth" -lt "$max_depth" ]; then
            extract_and_analyze_links "$url" "$depth" "$max_depth"
        fi
        
    else
        echo "❌ Broken link: $url"
        BROKEN_LINKS=$((BROKEN_LINKS + 1))
        
        # Add to broken links in report
        echo "- **$url** - Error: Failed to access (Depth: $depth)" >> "$REPORT_FILE"
        
        # Add to JSON report
        echo "  {\"url\": \"$url\", \"error\": \"Failed to access\", \"depth\": $depth}," >> "$JSON_REPORT"
    fi
    
    # Rate limiting
    sleep "$DELAY"
}

# Function to analyze page content
analyze_page_content() {
    local url="$1"
    local temp_file="/tmp/page_analysis_$$"
    
    # Download page content
    if curl -s -o "$temp_file" --connect-timeout 10 --max-time 30 "$url" 2>/dev/null; then
        local content_size=$(wc -c < "$temp_file")
        local text_content=$(cat "$temp_file" | sed 's/<[^>]*>//g' | tr -d '\n\r\t' | tr -s ' ' | sed 's/^ *//;s/ *$//')
        local text_length=${#text_content}
        
        # Check for missing content
        local issues=()
        
        if [ "$text_length" -lt 100 ]; then
            issues+=("Page has very little text content ($text_length characters)")
        fi
        
        if ! grep -q "<title>" "$temp_file"; then
            issues+=("Missing page title")
        fi
        
        if ! grep -q 'name="description"' "$temp_file"; then
            issues+=("Missing meta description")
        fi
        
        if ! grep -q "<h1\|<h2\|<h3" "$temp_file"; then
            issues+=("No headings found")
        fi
        
        if [ ${#issues[@]} -gt 0 ]; then
            echo "⚠️  Content issues found:"
            for issue in "${issues[@]}"; do
                echo "   - $issue"
            done
            MISSING_CONTENT=$((MISSING_CONTENT + 1))
            
            # Add to report
            echo "### Content Issues: $url" >> "$REPORT_FILE"
            for issue in "${issues[@]}"; do
                echo "- $issue" >> "$REPORT_FILE"
            done
            echo "" >> "$REPORT_FILE"
        fi
        
        # Check performance
        if [ "$content_size" -gt 1048576 ]; then
            local size_mb=$(echo "scale=2; $content_size / 1048576" | bc -l 2>/dev/null || echo "unknown")
            echo "⚠️  Large page size: ${size_mb}MB"
        fi
        
        # Extract links
        local links=$(grep -o 'href="[^"]*"' "$temp_file" | sed 's/href="//;s/"//g' | grep -E '^https?://')
        
        # Clean up temp file
        rm -f "$temp_file"
        
        # Return links for further analysis
        echo "$links"
    else
        echo "❌ Failed to download content from $url"
        rm -f "$temp_file"
    fi
}

# Function to extract and analyze links
extract_and_analyze_links() {
    local base_url="$1"
    local depth="$2"
    local max_depth="$3"
    
    local links=$(analyze_page_content "$base_url")
    
    if [ -n "$links" ]; then
        echo "🔗 Found $(echo "$links" | wc -l) links on $base_url"
        
        echo "$links" | while read -r link; do
            if [ -n "$link" ]; then
                # Only analyze links from the same domain
                if [[ "$link" == *"ziontechgroup.com"* ]]; then
                    echo "  🔍 Following link: $link"
                    analyze_page "$link" "$((depth + 1))" "$max_depth"
                fi
            fi
        done
    fi
}

# Start analysis from homepage
echo "🌐 Starting analysis from homepage..."
analyze_page "$BASE_URL" 0 "$MAX_DEPTH"

# Generate final report
echo "" >> "$REPORT_FILE"
echo "## Final Statistics" >> "$REPORT_FILE"
echo "- **Total Pages Analyzed**: $TOTAL_PAGES" >> "$REPORT_FILE"
echo "- **Working Links**: $WORKING_LINKS" >> "$REPORT_FILE"
echo "- **Broken Links**: $BROKEN_LINKS" >> "$REPORT_FILE"
echo "- **Pages with Missing Content**: $MISSING_CONTENT" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
echo "---" >> "$REPORT_FILE"
echo "*Report generated on $(date)*" >> "$REPORT_FILE"

# Update JSON report
sed -i 's/"total_pages_analyzed": 0/"total_pages_analyzed": '$TOTAL_PAGES'/' "$JSON_REPORT"
sed -i 's/"working_links": \[\],/"working_links": ['$WORKING_LINKS'],/' "$JSON_REPORT"
sed -i 's/"broken_links": \[\],/"broken_links": ['$BROKEN_LINKS'],/' "$JSON_REPORT"

echo ""
echo "🎉 Website analysis completed!"
echo "📊 Final Statistics:"
echo "   - Total Pages Analyzed: $TOTAL_PAGES"
echo "   - Working Links: $WORKING_LINKS"
echo "   - Broken Links: $BROKEN_LINKS"
echo "   - Pages with Missing Content: $MISSING_CONTENT"
echo ""
echo "📄 Reports generated:"
echo "   - Markdown: $REPORT_FILE"
echo "   - JSON: $JSON_REPORT"
echo "⏰ Completed at: $(date)"