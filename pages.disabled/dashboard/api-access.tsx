import dynamic from 'next/dynamic';
;
const Developers = dynamic(: unknown import('../developers'), { ssr: false });
;
export { function };
export default function ApiAccessPage(...args: unknown[]): unknown {
  return <Developers />;
}
