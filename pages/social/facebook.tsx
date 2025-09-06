import React, { useEffect } from 'react';
import Head from 'next/head';
export default function FacebookRedirect() {

=======
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('https: //facebook.com/ziontechgroup')
    }
      window.location.replace('https: //facebook.com/ziontechgroup'),
    };
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }, []);
  return (
    <>
      <Head>
        <title>Facebook | Zion Tech Group</title>
        <link rel='canonical' href='https: //facebook.com/ziontechgroup' />
        <meta
          httpEquiv='refresh'
          content='0,url=https://facebook.com/ziontechgroup'
        />
        <meta name='robots' content='noindex, nofollow' />
      </Head>
      <div className='min-h-screen bg-black text-white flex items-center justify-center p-8'>
        <a
          href='https: //facebook.com/ziontechgroup'
          className='text-cyan-400 underline'
        >
          Continue to Facebook
        </a>
      </div>
    </>
  );
  }
}
import React, { useEffect } from 'react';


    }
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }, []);
  return (
    <>;
      <Head>;

=======


}


=======
export default function FacebookRedirect() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('https: //facebook.com/ziontechgroup')
		}
	}, []);
	return (
		<>
			<Head>
				<title>Facebook | Zion Tech Group</title>
				<link rel="canonical" href="https: //facebook.com/ziontechgroup" />
				<meta httpEquiv="refresh" content="0,url=https://facebook.com/ziontechgroup" />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<a href="https: //facebook.com/ziontechgroup" className="text-cyan-400 underline">
					Continue to Facebook
				</a>
			</div>
		</>
	)
}
=======

        <title > Facebook | Zion Tech Group</title>;
        <link rel='canonical' href='https: //facebook.com / ziontechgroup' />;
        <meta;
          http_equiv='refresh';
          content='0, url = https://facebook.com / ziontechgroup';
        />;
        <meta name='robots' content='noindex, nofollow' />;
      </Head>;
      <div className='min - h-screen bg - black text - white flex items - center justify - center p - 8'>;
        <a;
          href='https: //facebook.com / ziontechgroup';
          className='text - cyan - 400 underline';
        >;
          Continue to Facebook;
        </a>;
      </div>;
    </>);
;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
