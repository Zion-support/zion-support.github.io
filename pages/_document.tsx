import { Html, Head, Main, NextScript } from 'next/document';

<<<<<<< HEAD
import Document, { Html, Head, Main, NextScript } from 'next/document';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import {Html, Head, Main, NextScript} from 'next/document';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1e293b" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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


      </Head>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
export default function Document() {
  return (
    <Html lang="en">
      <Head />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
<<<<<<< HEAD
}
  );
  );

}
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

    </Html>);
;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
