export const metadata = {
  title: 'Page | Zion Tech Group',
  description: 'Professional page services by Zion Tech Group',
  keywords: 'page, technology, services',
  openGraph: {
    title: 'Page | Zion Tech Group',
    description: 'Professional page services by Zion Tech Group',
    type: 'website',
  },
};


;








function PageComponent() {
  return (
    <div>
      <h1>5g Iot Solutions</h1>
      <p>Professional 5g iot solutions services by Zion Tech Group</p>
    </div>
  );
}

export default function Wrapped(props: Record<string, unknown>) {
  return (
    <PageComponent {...props} />
  );
}