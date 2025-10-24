import React from 'react';

interface ContentPreviewCardProps {
  className?: string;
}

export default function ContentPreviewCard({ className }: ContentPreviewCardProps) {
  return (
    <div className={className}>
      <h1>ContentPreviewCard</h1>
      <p>Component content</p>
    </div>
  );
}