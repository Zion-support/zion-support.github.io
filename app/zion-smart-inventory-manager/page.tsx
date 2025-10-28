;
;
;

export const metadata = {
  title: 'Page | Zion Tech Group',
  description: 'Professional page services and solutions by Zion Tech Group.',
  keywords: 'page, technology, services',
  openGraph: {
    title: 'Page | Zion Tech Group',
    description: 'Professional page services and solutions by Zion Tech Group.',
    type: 'website',
  },
};


function PageComponent() {
  return (
    <div>
      <h1>Zion Smart Inventory Manager</h1>
      <p>Professional zion smart inventory manager services by Zion Tech Group</p>
    </div>
  );
}

export default function Wrapped(props: Record<string, unknown>) {
  return (
    <PageComponent {...props} />
  );
}