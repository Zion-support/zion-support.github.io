#!/usr/bin/env python3
"""V637 - Attachment Preview Engine
Generate previews and thumbnails of email attachments without downloading.
REPLY-ALL ENFORCED: Always replies to all recipients in multi-person threads.
"""
import json, hashlib
from datetime import datetime
from typing import Dict, List, Any

class AttachmentPreviewEngine:
    """Generate previews and metadata for email attachments."""
    
    PREVIEWABLE_TYPES = {
        "document": [".pdf", ".doc", ".docx", ".txt", ".rtf"],
        "spreadsheet": [".xls", ".xlsx", ".csv"],
        "presentation": [".ppt", ".pptx"],
        "image": [".jpg", ".jpeg", ".png", ".gif", ".svg", ".webp"],
        "code": [".py", ".js", ".ts", ".java", ".html", ".css", ".json"]
    }
    
    def __init__(self):
        self.previews = []
    
    def generate_preview(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Generate preview for email attachments."""
        attachments = email.get("attachments", [])
        
        if not attachments:
            return {
                "engine": "V637",
                "email_subject": email.get("subject", ""),
                "attachment_count": 0,
                "previews": [],
                "reply_all_enforced": len(email.get("to", []) + email.get("cc", [])) > 1,
                "timestamp": datetime.now().isoformat()
            }
        
        previews = []
        for attachment in attachments:
            preview = self._generate_single_preview(attachment)
            previews.append(preview)
        
        total_size = sum(a.get("size", 0) for a in attachments)
        
        return {
            "engine": "V637",
            "email_subject": email.get("subject", ""),
            "attachment_count": len(attachments),
            "total_size_bytes": total_size,
            "total_size_human": self._human_size(total_size),
            "previews": previews,
            "all_previewable": all(p["previewable"] for p in previews),
            "quick_actions": self._suggest_quick_actions(previews),
            "reply_all_enforced": len(email.get("to", []) + email.get("cc", [])) > 1,
            "timestamp": datetime.now().isoformat()
        }
    
    def _generate_single_preview(self, attachment: Dict) -> Dict[str, Any]:
        """Generate preview for a single attachment."""
        filename = attachment.get("filename", "unknown")
        extension = self._get_extension(filename)
        file_type = self._classify_type(extension)
        size = attachment.get("size", 0)
        
        previewable = self._is_previewable(extension)
        
        preview_data = {
            "filename": filename,
            "extension": extension,
            "file_type": file_type,
            "size_bytes": size,
            "size_human": self._human_size(size),
            "previewable": previewable,
            "content_hash": hashlib.md5(filename.encode()).hexdigest()[:12]
        }
        
        if previewable:
            preview_data["preview"] = self._generate_type_preview(file_type, attachment)
            preview_data["metadata"] = self._extract_metadata(file_type, attachment)
            preview_data["thumbnail_url"] = f"/api/thumbnails/{preview_data['content_hash']}"
        
        return preview_data
    
    def _get_extension(self, filename: str) -> str:
        parts = filename.rsplit('.', 1)
        return f".{parts[1].lower()}" if len(parts) > 1 else ""
    
    def _classify_type(self, extension: str) -> str:
        for file_type, extensions in self.PREVIEWABLE_TYPES.items():
            if extension in extensions:
                return file_type
        return "other"
    
    def _is_previewable(self, extension: str) -> bool:
        for extensions in self.PREVIEWABLE_TYPES.values():
            if extension in extensions:
                return True
        return False
    
    def _generate_type_preview(self, file_type: str, attachment: Dict) -> Dict[str, Any]:
        """Generate type-specific preview."""
        previews = {
            "document": {
                "type": "text_preview",
                "first_lines": attachment.get("first_lines", ["Document preview not available"]),
                "page_count": attachment.get("pages", 1),
                "word_count": attachment.get("word_count", 0),
                "preview_format": "text"
            },
            "spreadsheet": {
                "type": "table_preview",
                "sheet_count": attachment.get("sheets", 1),
                "row_count": attachment.get("rows", 0),
                "column_count": attachment.get("columns", 0),
                "preview_rows": attachment.get("preview_rows", []),
                "preview_format": "table"
            },
            "presentation": {
                "type": "slide_preview",
                "slide_count": attachment.get("slides", 1),
                "first_slide_title": attachment.get("title", "Untitled Presentation"),
                "preview_format": "image"
            },
            "image": {
                "type": "image_preview",
                "dimensions": attachment.get("dimensions", "Unknown"),
                "format": attachment.get("format", "Unknown"),
                "preview_format": "image"
            },
            "code": {
                "type": "code_preview",
                "language": attachment.get("language", "text"),
                "line_count": attachment.get("lines", 0),
                "first_lines": attachment.get("first_lines", ["// Code preview"]),
                "preview_format": "code"
            }
        }
        
        return previews.get(file_type, {"type": "generic", "preview_format": "icon"})
    
    def _extract_metadata(self, file_type: str, attachment: Dict) -> Dict[str, Any]:
        """Extract file metadata."""
        metadata = {
            "created_at": attachment.get("created_at", ""),
            "modified_at": attachment.get("modified_at", ""),
            "author": attachment.get("author", "Unknown"),
            "version": attachment.get("version", "1.0")
        }
        
        if file_type == "document":
            metadata["page_count"] = attachment.get("pages", 1)
            metadata["word_count"] = attachment.get("word_count", 0)
        elif file_type == "image":
            metadata["dimensions"] = attachment.get("dimensions", "")
            metadata["color_space"] = attachment.get("color_space", "sRGB")
        
        return metadata
    
    def _suggest_quick_actions(self, previews: List[Dict]) -> List[str]:
        """Suggest quick actions based on attachment types."""
        actions = []
        types = [p["file_type"] for p in previews]
        
        if "document" in types:
            actions.append("Quick read summary")
            actions.append("Download as PDF")
        
        if "spreadsheet" in types:
            actions.append("View as chart")
            actions.append("Export to CSV")
        
        if "image" in types:
            actions.append("Full-screen view")
            actions.append("Download original")
        
        if "code" in types:
            actions.append("Syntax highlighted view")
            actions.append("Copy to clipboard")
        
        if len(previews) > 1:
            actions.append("Download all as ZIP")
        
        return actions[:4]
    
    def _human_size(self, size: int) -> str:
        for unit in ['B', 'KB', 'MB', 'GB']:
            if size < 1024:
                return f"{size:.1f} {unit}"
            size /= 1024
        return f"{size:.1f} TB"
    
    def process_batch(self, emails: List[Dict]) -> Dict[str, Any]:
        results = [self.generate_preview(e) for e in emails if e.get("attachments")]
        
        total_previews = sum(r["attachment_count"] for r in results)
        previewable_count = sum(1 for r in results for p in r["previews"] if p["previewable"])
        
        return {
            "engine": "V637 - Attachment Preview Engine",
            "total_emails_with_attachments": len(results),
            "total_attachments_previewed": total_previews,
            "previewable_attachments": previewable_count,
            "reply_all_enforced": sum(1 for r in results if r["reply_all_enforced"]),
            "results": results
        }

if __name__ == "__main__":
    engine = AttachmentPreviewEngine()
    test_emails = [
        {"subject": "Q4 Report", "body": "Please review attached.", "to": ["team@company.com", "manager@company.com"],
         "attachments": [
             {"filename": "Q4_Report.pdf", "size": 2456789, "pages": 25, "word_count": 8000,
              "first_lines": ["Quarterly Report Q4 2025", "Executive Summary: Revenue grew 15% YoY"]},
             {"filename": "budget.xlsx", "size": 456789, "sheets": 5, "rows": 200, "columns": 12}
         ]},
        {"subject": "Design mockup", "body": "Here's the design.", "to": ["design@company.com"],
         "attachments": [
             {"filename": "mockup.png", "size": 1234567, "dimensions": "1920x1080", "format": "PNG"}
         ]}
    ]
    result = engine.process_batch(test_emails)
    print(json.dumps(result, indent=2))
