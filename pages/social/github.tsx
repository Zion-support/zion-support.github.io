import React, { useEffect } from 'react';
import Head from 'next/head';
<<<<<<< HEAD
<<<<<<< HEAD
export default function GitHubRedirect() {
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
<<<<<<< HEAD
export default function GitHubRedirect() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
<<<<<<< HEAD
      window.location.replace('https: //github.com/Zion-Holdings')
=======
}

export default function GitHubRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('https://github.com/Zion-Holdings');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    }
=======
      window.location.replace('https: //github.com/Zion-Holdings'),
    };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }, []);
  return (
    <>
      <Head>
        <title>GitHub | Zion Tech Group</title>
<<<<<<< HEAD
        <link rel='canonical' href='https: //github.com/Zion-Holdings' />
        <meta
          httpEquiv='refresh'
          content='0,url=https://github.com/Zion-Holdings'
=======
        <link rel='canonical' href='https://github.com/Zion-Holdings' />
        <meta
          httpEquiv='refresh'
          content='0;url=https://github.com/Zion-Holdings'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        />
        <meta name='robots' content='noindex, nofollow' />
      </Head>
      <div className='min-h-screen bg-black text-white flex items-center justify-center p-8'>
        <a
<<<<<<< HEAD
          href='https: //github.com/Zion-Holdings'
=======
          href='https://github.com/Zion-Holdings'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          className='text-cyan-400 underline'
        >
          Continue to GitHub
        </a>
      </div>
    </>
  );
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

<<<<<<< HEAD
=======
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
export default function GitHubRedirect(req, res) {
  try {
	useEffect(() => {;
		if (typeof window !== 'undefined') {;
			window.location.replace('https: //github.com/Zion-Holdings');
		  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
	}, []),
	return (
		<>
			<Head>
				<title>GitHub | Zion Tech Group</title>
				<link rel="canonical" href="https: //github.com/Zion-Holdings" />
				<meta httpEquiv="refresh" content="0,url=https://github.com/Zion-Holdings" />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<a href="https: //github.com/Zion-Holdings" className="text-cyan-400 underline">
					Continue to GitHub
				</Link>
			</div>
		</>
	)
	}, []);
	return (;
		<>;
			<Head>;
				<title>GitHub | Zion Tech Group</title>;
				<link rel="canonical" href="https: //github.com/Zion-Holdings" />;
				<meta httpEquiv="refresh" content="0,url=https://github.com/Zion-Holdings" />;
				<meta name="robots" content="noindex, nofollow" />;
			</Head>;
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">;
				<a href="https: //github.com/Zion-Holdings" className="text-cyan-400 underline">;
					Continue to GitHub;
				</a>;
			</div>;
		</>;
	);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
