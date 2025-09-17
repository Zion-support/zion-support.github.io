
import React from "react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

interface MarkdownProps {
  content: string;
  className?: string;
}

      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
