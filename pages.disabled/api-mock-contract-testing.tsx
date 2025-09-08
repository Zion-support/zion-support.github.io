



        <ServiceAds
          heading='API Quality Fast-Track'
          subheading='Mock, validate, and ship with confidence.'
          items={adItems}


              <div
                key={t && t.name}
                className='bg-black/30 border border-gray-700/50 rounded-2xl p-6'>;
                <div className='flex items-center gap-2 mb-2'>;
                  <ShieldCheck className='w-5 h-5 text-cyan-400' />;
                  <h3 className='text-white text-xl font-bold'>{t && t.name}</h3>;
                </div>;
                <div className='text-cyan-400 font-semibold mb-4'>;
                  {t && t.price}
                </div>;
                <ul className='space-y-2 text-gray-300 text-sm'>;
                  {t && t.items.map(i => (;
                    <li
                      key={i}
                      className='flex items-start gap-2 w-4 h-4 mt-0 && 0.5 text-emerald-400'>;
                      <Check /> <span>{i}</span>;
                    </li>                  ))}
          </div>
          <div className='mt-8 max-w-3xl mx-auto bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30'>
                      className='flex items-start gap-2 w-4 h-4 mt-0.5 text-emerald-400'
                    >
                      <Check /> <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
origin/cursor/automate-test-improve-and-merge-code-2533
          </div>

<div className='mt-8 max-w-3xl mx-auto bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4'>
              <div className='flex items-center justify-center gap-2 text-cyan-400 w-4 h-4'>
                <Phone />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className='flex items-center justify-center gap-2 text-purple-400 w-4 h-4'>
                <Mail />
                <span>{contactInfo.email}</span>
              </div>
              <div className='flex items-center justify-center gap-2 text-green-400 w-4 h-4 text-xs'>
                <MapPin />
                <span>{contactInfo.address}</span>
              </div>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <ServiceAds heading="API Quality Fast-Track" subheading="Mock, validate, and ship with confidence." items={adItems} />
        <div className="max-w-5xl mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div key={t.name} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-white text-xl font-bold">{t.name}</h3>
                </div>
                <div className="text-cyan-400 font-semibold mb-4">{t.price}</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {t.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 w-4 h-4 mt-0.5 text-emerald-400"><Check /> <span>{i}</span></li>
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </ul>;
              </div>;


          </div>
          <div className="mt-8 max-w-3xl mx-auto bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
              <div className="flex items-center justify-center gap-2 text-cyan-400 w-4 h-4"><Phone /><span>{contactInfo.mobile}</span></div>
              <div className="flex items-center justify-center gap-2 text-purple-400 w-4 h-4"><Mail /><span>{contactInfo.email}</span></div>
              <div className="flex items-center justify-center gap-2 text-green-400 w-4 h-4 text-xs"><MapPin /><span >{contactInfo.address}</span></div>
            </div>
            <div className="text-center">


<a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">Book a Demo</Link>

            </div>


          </div>
        </div>
      </div>
    </Layout>


          </div>;

          <div className='mt-8 max-w-3xl mx-auto bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30'>;
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4'>;
              <div className='flex items-center justify-center gap-2 text-cyan-400 w-4 h-4'>;
                <Phone />;
                <span>{contactInfo && contactInfo.mobile}</span>;
              </div>;
              <div className='flex items-center justify-center gap-2 text-purple-400 w-4 h-4'>;
                <Mail />;
                <span>{contactInfo && contactInfo.email}</span>;
              </div>;
              <div className='flex items-center justify-center gap-2 text-green-400 w-4 h-4 text-xs'>;
                <MapPin />;
                <span>{contactInfo && contactInfo.address}</span>;
              </div>;
            </div>;
            <div className='text-center'>;
              <a
                href='/contact'
                className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl'>;
    <Layout>;
      <Head>;
        <title > API Mock & Contract Testing | Zion Tech Group</title>;
        <meta;
          name='description';
          content='OpenAPI / GraphQL mock servers, contract tests in CI, and deployment gates with snapshot diffs and approvals.';
        />;
        <link;
          rel='canonical';
          href='https://ziontechgroup.com / api - mock - contract - testing';
        />;
      </Head>;
      <div className='min - h-screen py - 20 px - 4 sm:px - 6 lg:px - 8'>;
        <ServiceAds;
          heading='API Quality Fast - Track';
          subheading='Mock, validate, and ship with confidence.';
          items={ad_items}
        />;
        <div className='max - w-5xl mx - auto mt - 8'>;
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6'>;
            {tiers.map (t => (
              <div;
                key={t.name}
                className='bg - black / 30 border border - gray - 700 / 50 rounded - 2xl p - 6';
              >;
                <div className='flex items - center gap - 2 mb - 2'>;
                  <ShieldCheck className='w - 5 h - 5 text - cyan - 400' />;
                  <h3 className='text - white text - xl font - bold'>{t.name}</h3>;
                </div>;
                <div className='text - cyan - 400 font - semibold mb - 4'>;
                  {t.price}
                </div>;
                <ul className='space - y-2 text - gray - 300 text - sm'>;
                  {t.items.map (index => (
                    <li;
                      key={i}
                      className='flex items - start gap - 2 w - 4 h - 4 mt - 0.5 text - emerald - 400';
                    >;
                      <Check /> <span>{i}</span>;
                    </li>                  ))}
                </ul>;
              </div>))}
          </div>;
          <div className='mt - 8 max - w-3xl mx - auto bg - black / 20 backdrop - blur - xl rounded - 2xl p - 6 border border - cyan - 500 / 30'>;
            <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4 text - sm mb - 4'>;
              <div className='flex items - center justify - center gap - 2 text - cyan - 400 w - 4 h - 4'>;
                <Phone />;
                <span>{contact_info.mobile}</span>;
              </div>;
              <div className='flex items - center justify - center gap - 2 text - purple - 400 w - 4 h - 4'>;
                <Mail />;
                <span>{contact_info.email}</span>;
              </div>;
              <div className='flex items - center justify - center gap - 2 text - green - 400 w - 4 h - 4 text - xs'>;
                <MapPin />;
                <span>{contact_info.address}</span>;
              </div>;
            </div>;
            <div className='text - center'>;
              <a;
                href='/contact';
                className='bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 6 py - 3 rounded - xl';
              >;


                Book a Demo;
              </a>            </div>;
          </div>;
        </div>;
      </div>;





  )
}

    </Layout>);
;






