

export default function Document() {
  return (
    <Html lang="en">
      <Head>

      </Head>

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
