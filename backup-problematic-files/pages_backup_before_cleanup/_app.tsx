<<<<<<< HEAD:backup-problematic-files/pages_backup_before_cleanup/_app.tsx
import type { AppProps } from \'next/app\' import \'../styles/globals.css\' export default function App({ Component,pageProps }: AppProps) { return <Component {...pageProps} /> }
const type { AppProps } from "next/app" import "./styles/globals.css" export default function App({ Component,pageProps }: AppProps) { return <Component {.pageProps} /> }''"
import React from 'react';

=======
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
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:pages_backup_before_cleanup/_app.tsx
