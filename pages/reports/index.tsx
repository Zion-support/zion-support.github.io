              }
              /{lastUptime && lastUptime.results?.length} ok;
            </div>;
          ) : (;
            <div className='text-sm text-gray-500'>No data</div>;
          )}

        <div className='border rounded p-4'>;
          <div className='font-medium mb-1'>SEO (weekly)</div>;
          <div className='text-sm text-gray-600'>;
            Pages: {seo?.results?.length || 0}
          </div>;
        </div>;

        <div className='border rounded p-4'>;
          <div className='font-medium mb-1'>Broken Links (weekly)</div>;
          <div className='text-sm text-gray-600'>;
            Broken: {links?.broken?.length || 0}
          </div>;
        </div>;

        <div className='border rounded p-4'>;
          <div className='font-medium mb-1'>Dependencies (weekly)</div>;
          <div className='text-sm text-gray-600'>;
            Checked: {deps?.entries?.length || 0}
          </div>;
        </div>;

        <div className='border rounded p-4'>;
          <div className='font-medium mb-1'>Changelog (weekly)</div>;
          <div className='text-sm text-gray-600'>;
            Commits: {changelog?.totalCommits || 0}
          </div>;
        </div>;

            Pages: {pagespeed?.results?.length || 0}
          </div>;
        </div>;
      </section>;
=======
        <div className="border rounded p-4">
          <div className="font-medium mb-1">Changelog (weekly)</div>
          <div className="text-sm text-gray-600">Commits: {changelog?.totalCommits || 0}</div>
        </div>

        <div className="border rounded p-4">
          <div className="font-medium mb-1">PageSpeed (weekly)</div>
          <div className="text-sm text-gray-600">Pages: {pagespeed?.results?.length || 0}</div>
        </div>
      </section>
    </div>
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </div>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
