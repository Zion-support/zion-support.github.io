'use client';

export default function Breadcrumb({ items }: { items: Array<{ label: string; href?: string }> }) {
  // Stub: minimal implementation to satisfy imports during build
  return (
    <nav aria-label="Breadcrumb" className="hidden">
      {items.map((item, i) => (
        <span key={i}>{item.label}</span>
      ))}
    </nav>
  );
}
