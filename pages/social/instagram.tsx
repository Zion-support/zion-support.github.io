import React, { useEffect } from 'react';
import Head from 'next/head';
export default function InstagramRedirect() {

=======
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('https: //instagram.com/ziontechgroup')
    }
      window.location.replace('https: //instagram.com/ziontechgroup'),
    };
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }, []);
  return (
    <>
      <Head>
        <title>Instagram | Zion Tech Group</title>
        <link rel='canonical' href='https: //instagram.com/ziontechgroup' />
        <meta
          httpEquiv='refresh'
          content='0,url=https://instagram.com/ziontechgroup'
        />
        <meta name='robots' content='noindex, nofollow' />
      </Head>
      <div className='min-h-screen bg-black text-white flex items-center justify-center p-8'>
        <a
          href='https: //instagram.com/ziontechgroup'
          className='text-cyan-400 underline'
        >
          Continue to Instagram
        </a>
      </div>
    </>
  );
<<<<<<< HEAD
  }
}
import React, { useEffect } from 'react';


    }
=======

      window.location.replace('https: //instagram.com/ziontechgroup'),
    };

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }, []);
  return (
    <>;
      <Head>;

=======


}


=======
export default function InstagramRedirect() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('https: //instagram.com/ziontechgroup')
		}
	}, []);
	return (
		<>
			<Head>
				<title>Instagram | Zion Tech Group</title>
				<link rel="canonical" href="https: //instagram.com/ziontechgroup" />
				<meta httpEquiv="refresh" content="0,url=https://instagram.com/ziontechgroup" />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<a href="https: //instagram.com/ziontechgroup" className="text-cyan-400 underline">
					Continue to Instagram
				</a>
			</div>
		</>
	)
}
=======

        <title > Instagram | Zion Tech Group</title>;
        <link rel='canonical' href='https: //instagram.com / ziontechgroup' />;
        <meta;
          http_equiv='refresh';
          content='0, url = https://instagram.com / ziontechgroup';
        />;
        <meta name='robots' content='noindex, nofollow' />;
      </Head>;
      <div className='min - h-screen bg - black text - white flex items - center justify - center p - 8'>;
        <a;
          href='https: //instagram.com / ziontechgroup';
          className='text - cyan - 400 underline';
        >;
          Continue to Instagram;
        </a>;
      </div>;
    </>);
;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
