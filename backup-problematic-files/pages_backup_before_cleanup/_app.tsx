import type { AppProps } from \'next/app\' import \'../styles/globals.css\' export default function App({ Component,pageProps }: AppProps) { return <Component {...pageProps} /> }

<<<<<<< HEAD
interface _appProps {
  className?: string;
}

const _app: React.FC<_appProps> = ({ className }) => {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return (
    <div className={className || ''}>
      <h1>_app</h1>
      <p>This component is under development.</p>
    </div>
  );
}
=======
const type { AppProps } from "next/app" import "./styles/globals.css" export default function App({ Component,pageProps }: AppProps) { return <Component {.pageProps} /> }""

const _app: React.FC<_appProps> = ({ className }) => {
</_appProps>"
    <div className={className || }>
</div>
      <h1>_app</h1>
      <p>This component is under development.</p>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
