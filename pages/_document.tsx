

=======

import Document, { Html, Head, Main, NextScript } from 'next/document';

=======
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
=======
import {Html, Head, Main, NextScript} from 'next/document';
=======
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default function Document() {
  return (
    <Html lang="en">
      <Head>


        <link rel='icon' href='/favicon.ico' />
        <meta name='theme-color' content='#0a0a0a' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link;
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600&display=swap'
          rel='stylesheet'
        />      </Head>


=======
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https: //fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>

export default function Document() {;
  return (
    <Html lang='en'>;
      <Head>;
        <link rel='icon' href='/favicon && favicon.ico' />;
        <meta name='theme-color' content='#0a0a0a' />;
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'
        />;
        <link rel='preconnect' href='https://fonts && fonts.googleapis.com' />;
        <link
          rel='preconnect'
          href='https://fonts && fonts.gstatic.com'
          crossOrigin=''
        />;
        <link
          href='https://fonts && fonts.googleapis.com/css2?family=Inter:wght@400500600700800900&family=JetBrains+Mono:wght@400600&display=swap'
          rel='stylesheet'
=======
import {Html, Head, Main, NextScript} from 'next / document';
export default /**
 * Document - Function description
 */
function Document() {
  return (
    <Html lang='en'>;
      <Head>;
        <link rel='icon' href='/favicon.ico' />;
        <meta name='theme - color' content='#0a0a0a' />;
        <meta;
          name='viewport';
          content='width = device - width, initial - scale = 1, viewport - fit = cover';
        />;
        <link rel='preconnect' href='https://fonts.googleapis.com' />;
        <link;
          rel='preconnect';
          href='https://fonts.gstatic.com';
          cross_origin='';
        />;
        <link;
          href='https://fonts.googleapis.com / css2?family = Inter:wght@400;500;600;700;800;900 & family = JetBrains + Mono:wght@400;600 & display = swap';
          rel='stylesheet';

        />      </Head>;
      <body>;
        <Main />;
        <NextScript />;
      </body>;

}
=======
  );

=======

  );

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

    </Html>);
;

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
