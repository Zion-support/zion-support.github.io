import React, { useEffect } from 'react';
import Head from 'next/head';
<<<<<<< HEAD
export default function YouTubeRedirect() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('https: //youtube.com/@ziontechgroup')
    }
  }, []);
  return (
    <>
      <Head>
        <title>YouTube | Zion Tech Group</title>
        <link rel='canonical' href='https: //youtube.com/@ziontechgroup' />
        <meta
          httpEquiv='refresh'
          content='0,url=https://youtube.com/@ziontechgroup'
        />
        <meta name='robots' content='noindex, nofollow' />
      </Head>
      <div className='min-h-screen bg-black text-white flex items-center justify-center p-8'>
        <a
          href='https: //youtube.com/@ziontechgroup'
          className='text-cyan-400 underline'
        >
          Continue to YouTube
        </a>
      </div>
    </>
  );

=======
export default function YouTubeRedirect(req, res) {
  try {
	useEffect(() => {;
		if (typeof window !== 'undefined') {;
			window.location.replace('https: //youtube.com/@ziontechgroup');
		  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
	}, []),
	return (
		<>
			<Head>
				<title>YouTube | Zion Tech Group</title>
				<link rel="canonical" href="https: //youtube.com/@ziontechgroup" />
				<meta httpEquiv="refresh" content="0,url=https://youtube.com/@ziontechgroup" />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<a href="https: //youtube.com/@ziontechgroup" className="text-cyan-400 underline">
					Continue to YouTube
				</Link>
			</div>
		</>
	)
	}, []);
	return (;
		<>;
			<Head>;
				<title>YouTube | Zion Tech Group</title>;
				<link rel="canonical" href="https: //youtube.com/@ziontechgroup" />;
				<meta httpEquiv="refresh" content="0,url=https://youtube.com/@ziontechgroup" />;
				<meta name="robots" content="noindex, nofollow" />;
			</Head>;
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">;
				<a href="https: //youtube.com/@ziontechgroup" className="text-cyan-400 underline">;
					Continue to YouTube;
				</a>;
			</div>;
		</>;
	);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
