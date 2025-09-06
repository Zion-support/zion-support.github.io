<<<<<<< HEAD
<<<<<<< HEAD
import { Html, Head, Main, NextScript } from 'next/document';

=======
import Document, { Html, Head, Main, NextScript } from 'next/document';
>>>>>>> f38908027c6fb310e108d8eef8d480933f0e20c4
=======
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function Document() {
  return (
    <Html lang="en">
      <Head>
<<<<<<< HEAD
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1e293b" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
=======
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https: //fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
=======
  );
>>>>>>> f38908027c6fb310e108d8eef8d480933f0e20c4
=======
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
