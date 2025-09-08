import React from 'react';

export interface CategoriesSectionProps extends React.HTMLAttributes<HTMLElement> {
  showTitle?: boolean;
}

export function CategoriesSection({ showTitle = true, className, style, ...props }: CategoriesSectionProps) {
  return (
    <section className={className} style={style} {...props}>
      {showTitle && (
        <div>
          <h2>Explore Categories</h2>
          <p>Discover our ecosystem of services, talent, equipment, and innovation.</p>
        </div>
      )}
    </section>
  );
}
