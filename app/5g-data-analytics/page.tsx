export const metadata = {
  title: '5G Data Analytics | Zion Tech Group',
  description: 'Advanced 5G data analytics solutions by Zion Tech Group',
  keywords: '5G, data analytics, technology, services',
  openGraph: {
    title: '5G Data Analytics | Zion Tech Group',
    description: 'Advanced 5G data analytics solutions by Zion Tech Group',
    type: 'website',
  },
};

function PageComponent() {
  return (
    <div>
      <h1>5G Data Analytics</h1>
      <p>Advanced 5G data analytics solutions</p>
    </div>
  );
}

export default function Wrapped(props: Record<string, unknown>) {
  return (
    <PageComponent {...props} />
  );
}