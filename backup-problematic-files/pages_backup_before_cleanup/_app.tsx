import type { AppProps } from \'next/app\' import \'../styles/globals.css\' export default function App({ Component,pageProps }: AppProps) { return <Component {...pageProps} /> }

interface _appProps {
  className?: string;
}

const _app: React.FC<_appProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>_app</h1>
      <p>This component is under development.</p>
    </div>
  );
}
const type { AppProps } from "next/app" import "./styles/globals.css" export default function App({ Component,pageProps }: AppProps) { return <Component {.pageProps} /> }""

const _app: React.FC<_appProps> = ({ className }) => {
</_appProps>"
    <div className={className || }>
</div>
      <h1>_app</h1>
      <p>This component is under development.</p>
