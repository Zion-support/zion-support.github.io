

=======
import {Html, Head, Main, NextScript} from 'next/document';
=======
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export default function Document() {
  return (
    <Html lang="en">
      <Head>

      </Head>

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      </Head>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>

  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
  )
}

    </Html>);
;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
