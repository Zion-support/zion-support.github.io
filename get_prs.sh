#!/bin/bash

echo "Fetching open pull requests..."
curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" > prs.json

echo "Open Pull Requests:"
echo "==================="

# Extract PR information using awk
awk '
/"number":/ {
    number = $2
    gsub(/,/, "", number)
    printf "PR #%s:\n", number
}
/"title":/ {
    title = substr($0, index($0, ":") + 3)
    gsub(/,$/, "", title)
    gsub(/"/, "", title)
    printf "  Title: %s\n", title
}
/"ref":/ && !/compare_url/ {
    ref = substr($0, index($0, ":") + 3)
    gsub(/,$/, "", ref)
    gsub(/"/, "", ref)
    if (ref != "ref" && ref != "href" && ref != "archive_url" && ref != "git_refs_url") {
        printf "  Branch: %s\n", ref
        print "---"
    }
}
' prs.json

echo "Total PRs found: $(grep -c '"number":' prs.json)"