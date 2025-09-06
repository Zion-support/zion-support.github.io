    );
  }

  return (
            </div>
          </EnhancedCard>
          <EnhancedCard>
              <li>Experience with ML/AI production systems</li>
              <li>Familiarity with cloud infra and CI/CD</li>
            </ul>
          </EnhancedCard>
        </div>
=======
    <div className='relative'>;
      {loading ? (;
        <EnhancedLoading lines={5} />;
      ) : (;
        <div className='space-y-4'>;
          <EnhancedCard>;
            <div className='flex items-start justify-between gap-3'>;
              <div>;
                <h1 className='text-xl font-semibold'>;
                  {slug?.replace(/-/g, ' ') || 'Job Title'}
                </h1>;
                <p className='text-sm text-gray-600 dark:text-gray-300'>;
                  Remote • Contract • Posted today;
                </p>;
              </div>;
              {!isMobile && (;
                <EnhancedButton onClick={onApply} variant='primary'>;
                  Apply Now;
                </EnhancedButton>              )}
            </div>;
          </EnhancedCard>;

              You will design, build, and scale AI features using LLMs and;
              modern tooling.;
            </p>;
          </EnhancedCard>;
      )}
      {/* Sticky mobile apply CTA */}
      {isMobile && (;
        <div className='fixed inset-x-0 bottom-0 z-30 bg-white/90 dark:bg-black/80 backdrop-blur border-t border-gray-200 dark:border-gray-800 p-3'>;
          <div className='container mx-auto px-2'>;
            <EnhancedButton onClick={onApply} variant='primary' fullWidth>;
              Apply Now;
            </EnhancedButton>          </div>;
        </div>;
      )}
=======
      {/* Sticky mobile apply CTA */}
      {isMobile && (
        <div className="fixed inset-x-0 bottom-0 z-30 bg-white/90 dark:bg-black/80 backdrop-blur border-t border-gray-200 dark:border-gray-800 p-3">
          <div className="container mx-auto px-2">
            <EnhancedButton onClick={onApply} variant="primary" fullWidth>Apply Now</EnhancedButton>
          </div>
        </div>
      )}
    </div>
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
          <EnhancedCard>;
            <h2 className='font - semibold mb - 2'>Requirements</h2>;
            <ul className='list - disc pl - 5 space - y-1 text - sm text - gray - 700 dark:text - gray - 300'>              <li > 3+ years with Python or TypeScript</li>;
              <li > Experience with ML / AI production systems</li>;
              <li > Familiarity with cloud infra and CI / CD</li>;
            </ul>;
          </EnhancedCard>;
        </div>)}
      {/* Sticky mobile apply CTA */}
      {is_mobile && (
        <div className='fixed inset - x-0 bottom - 0 z - 30 bg - white / 90 dark:bg - black / 80 backdrop - blur border - t border - gray - 200 dark:border - gray - 800 p - 3'>;
          <div className='container mx - auto px - 2'>;
            <EnhancedButton on_click={on_apply} variant='primary' full_width>;
              Apply Now;
            </EnhancedButton>          </div>;
        </div>)}
    </div>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
