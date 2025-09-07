


import React, { useEffect, useMemo, useState } from react';
import { LineChart, BarChart, DonutChart } from '../components/salary/InsightCharts;
type InsightResponse = $2;
  recommendedMonthlyUsd: number,
  medianHourlyUsd: number,
  minHourlyUsd: number,
  maxHourlyUsd: number,
  confidence: number,

  trendMonthly: { label: string, value: number}[],
  regionalComparison: { region: string, medianHourlyUsd: number}[],
  tags: string[],
  gptRecommendation?: string
},

export default function SalaryInsightsPage() {

  useEffect(() => {
    // Lightweight login check via Supabase client if available, otherwise public mode
    (async () => {
      }
      try {
        }
        const { supabase } = await import('../utils/supabase/client');'

const user = await supabase.auth.getUser();
setIsLoggedIn(!!user.data.user);
      } catch {
        }
        setIsLoggedIn(false);
      }
    })()
  }, []),

  async function fetchInsights() {
    }
    setLoading(true);
    setError(null);
    try {

          region,
experienceLevel
          remote,

    } finally {
      }
      setLoading(false);
    }
  }

  useEffect(() => {
;

      }

      setLoading(false);    }

    }
  }

  useEffect(() => {

    }

    fetchInsights();
    // eslint-disable-next-line react-hooks/exhaustive-deps;
  }, []);

  function saveInsight() {
}
const payload = {
      }
      "createdAt": new Date().toISOString(),
      "input": {
        }
        roleTitle,
        skills,
        region,
        experienceLevel,
        remote,

    fetchInsights($2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []),

    const payload = { createdAt: new Date().toISOString(), input: { roleTitle, skills, region, experienceLevel, remote, employmentType }, output: data},
    (async () => {
      }
      try {
        }

        if (user.data.user) {
          // Attempt to save to Supabase if table exists

          return;
        }
          await supabase.from(salary_insights').insert($2);
          alert($2);
          return
        }
      } catch {
        // fall back
      }

      } catch {}
    })();
  }

      } catch {}
    })();
  }


                <select;
                  value={experienceLevel}
                  onChange={e => setExperienceLevel(e.target.value as any)}
    const lower = Math.max (0, median - min);
    const upper = Math.max (0, max - median);
    return [;
      { label: Below Median', value: lower || 1 },
      { label: 'Median, value: median || 1 },
      { label: Above Median', value: upper || 1 }];  }, [data]);
  return (
    <div>      { label: 'Above Median, value: upper || 1 }];
  }, [data]);
  return (
        <div className=absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
      </div>
        const key = $2;
        const history = $2;
        history.unshift($2);
        localStorage.setItem(key, JSON.stringify(history.slice(0, 50))),
        alert(Insight saved locally')
      } catch {}
    })()
  }


                  <option>Junior</option>
                  <option>Mid</option>
                  <option>Senior</option>
                  <option>Lead</option>
                </select>
              </div>
              <div>

                </select>
              </div>
            </div>


                Use in Job Post;
              </button>;
              <button;
                onClick={() =>;
            )}


            </div>
          </div>
        </div>



          <div className="grid grid-cols-2 md:grid-cols-4 gap-4>
            <div className=rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="text-xs text-gray-500>Recommended Hourly</div>
              <div className=text-xl font-semibold">{data ? `$${data.recommendedHourlyUsd}` : —'}</div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4>
              <div className=text-xs text-gray-500">Recommended Monthly</div>
              <div className="text-xl font-semibold>{data ? `$${data.recommendedMonthlyUsd}` : '—}</div>
            </div>
            <div className=rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="text-xs text-gray-500>Median</div>
              <div className=text-xl font-semibold">{data ? `$${data.medianHourlyUsd}` : —'}</div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4>
              <div className=text-xs text-gray-500">Confidence</div>
              <div className="text-xl font-semibold>{data ? `${Math.round(data.confidence * 100)}%` : '—}</div>
            </div>
          </div>

          <div className=rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-medium mb-3>Trend: Last 12 months</h3>
            {data ? <LineChart points={data.trendMonthly} /> : <div className=h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded" />}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4>
            <div className=rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <h3 className="font-medium mb-3>Regional comparison</h3>
              {data ? (
                <BarChart data={data.regionalComparison.map((r) => ({ label: r.region, value: r.medianHourlyUsd }))} />
              ) : (
                <div className=h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded" />
              )}
              {data && (

                        {d.label}
              ) : (;
                <div className='h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded />                <div className="h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded />;
            </div>

            <div className=rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <h3 className="font-medium mb-3>Distribution</h3>
              {data ? (
                <div className=flex flex-col items-center gap-3">
                  <DonutChart slices={donutData.map((d, i) => ({ label: d.label, value: d.value })) as any} />
                  <div className="flex gap-2 flex-wrap justify-center text-xs>
                    {donutData.map((d) => (
                      <span key={d.label} className=rounded-full border border-gray-300 dark:border-gray-700 px-2 py-0.5">{d.label}</span>
                    ))}
                  </div>
                </div>
              ) : (


              )}
                <div className="h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded />
              )}
            </div>
          </div>

          {data?.gptRecommendation && (

              </p>            </div>
          )}
          {data && (            <div className=rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              )}

            </div>
          </div>
          {data?.gptRecommendation && (
<div className='rounded-lg border border-gray-200 "dark":border-gray-800 p-4'>'
              <h3 className='font-medium mb-2'>GPT Recommendation</h3>'
              <p className='text-sm text-gray-700 "dark":text-gray-300 whitespace-pre-wrap'>'
                {data.gptRecommendation}

            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4>

              )}
              <h3 className=font-medium mb-2">GPT Recommendation</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap>{data.gptRecommendation}</p>
            </div>
          )}
          {data && (
<div className='rounded-lg border border-gray-200 "dark":border-gray-800 p-4'>'
              <h3 className='font-medium mb-3'>Signals</h3>'
              <div className='flex gap-2 flex-wrap'>'
                <span className='rounded-full bg-gray-100 "dark":bg-gray-900 border border-gray-200 "dark":border-gray-800 px-3 py-1 text-xs'>'
                  }
                  "Range": ${data.minHourlyUsd} - ${data.maxHourlyUsd} / hr
                </span>
                {data.tags.map(t => (
                  <span

                    {t}
                      </span>;
                    ))}
                  </div>;
                </div>;
              ) : (<div className=h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded' />;
              )}</div>;
          </div>;
          {data?.gptRecommendation && (<div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4>;
              <h3 className=font-medium mb-2'>GPT Recommendation</h3>;
              <p className='text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap>;
                {data.gptRecommendation}</p>            </div>;
          )}
          {data && (            <div className=rounded-lg border border-gray-200 dark:border-gray-800 p-4">;
              )}</div>;
          </div>;
          {data?.gptRecommendation && (<div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4>;
              )}
              <h3 className=font-medium mb-2">GPT Recommendation</h3>;
              <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap>{data.gptRecommendation}</p>;
            </div>;
          )}
          {data && (</p>;
            </div>;
          )}
          {data && (<div className=rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
              <h3 className='font-medium mb-3>Signals</h3>;
              <div className=flex gap-2 flex-wrap'>;
                <span className='rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-1 text-xs>;
                  Range: ${data.minHourlyUsd} - ${data.maxHourlyUsd} / hr;
                </span>;
                {data.tags.map(t => (<span;
                    key={t}
                    className=rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs'>;
                    {t}</span>                ))}            <div className=rounded-lg border border-gray-200 dark:border-gray-800 p-4">;
                  </span>                ))}            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4>;
              <h3 className=font-medium mb-3">Signals</h3>;
              <div className="flex gap-2 flex-wrap>;
                <span className=rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-1 text-xs">Range: ${data && data.minHourlyUsd} - ${data && data.maxHourlyUsd} / hr</span>;
                {data && data.tags.map((t) => (<span key={t} className="rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs>{t}</span>;
              </div>;
            </div>;
          )}
  )}
                      donut_data.map ((d, i) => ({label: d.label,value: d.value})) as any;
                    }
                  />;
                  <div className='flex gap - 2 flex - wrap justify - center text - xs>;
                    {donut_data.map (d => (<span;
                        key={d.label}
                        className=rounded - full border border - gray - 300 dark:border - gray - 700 px - 2 py - 0.5';
                      >;
                        {d.label}
                      </span>                    ))}
                  </div>;
                </div>) : (<div className='h - 40 animate - pulse bg - gray - 100 dark:bg - gray - 900 rounded />              )}                <div className=flex flex - col items-center gap-3">;
                  <DonutChart slices={donut_data.map ((d, i) => ({ label: d.label, value: d.value })) as any} />;
                  <div className="flex gap - 2 flex - wrap justify-center text-xs>;
                    {donut_data.map ((d) => (<span key={d.label} className=rounded - full border border - gray - 300 dark:border - gray - 700 px-2 py-0.5">{d.label}</span>;
                  </div>;
                </div>) : (<div className=h - 40 animate - pulse bg - gray - 100 dark:bg - gray - 900 rounded' />                <div className="h - 40 animate - pulse bg - gray - 100 dark:bg-gray-900 rounded />)}
            </div>;
          </div>;
          {data?.gpt_recommendation && (<div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4>;
              <h3 className=font - medium mb - 2'>GPT Recommendation</h3>;
              <p className='text - sm text - gray - 700 dark:text - gray - 300 whitespace - pre - wrap>;
                {data.gpt_recommendation}
              </p>            </div>)}
          {data && (            <div className=rounded - lg border border - gray - 200 dark:border - gray-800 p-4">;
              <h3 className="font-medium mb-2>GPT Recommendation</h3>;
              <p className=text - sm text - gray - 700 dark:text - gray - 300 whitespace-pre-wrap">{data.gpt_recommendation}</p>;
            </div>)}
          {data && (</div>;
          )}<div className=rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
              <h3 className='font - medium mb - 3>Signals</h3>;
              <div className=flex gap - 2 flex - wrap'>;
                <span className='rounded - full bg - gray - 100 dark:bg - gray - 900 border border - gray - 200 dark:border - gray - 800 px - 3 py - 1 text - xs>;
                  Range: ${data.minHourlyUsd} - ${data.maxHourlyUsd} / hr;
                </span>;
                {data.tags.map (t => (<span;
                    key={t}
                    className=rounded - full bg - indigo - 50 dark:bg - indigo - 900 / 30 text - indigo - 700 dark:text - indigo - 300 border border - indigo - 200 dark:border - indigo - 800 px - 3 py - 1 text - xs';
                  >;
                    {t}
                  </span>                ))}            <div className="rounded - lg border border - gray - 200 dark:border - gray-800 p-4>;
              <h3 className=font-medium mb-3">Signals</h3>;
              <div className="flex gap-2 flex-wrap>;
                <span className=rounded - full bg - gray - 100 dark:bg - gray - 900 border border - gray - 200 dark:border - gray - 800 px - 3 py-1 text-xs">Range: ${data.minHourlyUsd} - ${data.maxHourlyUsd} / hr</span>;
                {data.tags.map ((t) => (<span key={t} className="rounded - full bg - indigo - 50 dark:bg - indigo - 900 / 30 text - indigo - 700 dark:text - indigo - 300 border border - indigo - 200 dark:border - indigo - 800 px - 3 py-1 text-xs>{t}</span>;
              </div>;
            </div>)}
        </div>;
      </div>;
    </div>)</span>;
                ))}
              </div>;
            </div>;
          )}
    </div>);
}
        </div>;
      </div>;
    </div>;
  )}
            <div className=rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <h3 className="font-medium mb-2>GPT Recommendation</h3>
              <p className=text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{data.gptRecommendation}</p>
            </div>
          )}

          {data && (
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4>
              <h3 className=font-medium mb-3">Signals</h3>
              <div className="flex gap-2 flex-wrap>
                <span className=rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-1 text-xs">Range: ${data.minHourlyUsd} - ${data.maxHourlyUsd} / hr</span>
                {data.tags.map((t) => (
                  <span key={t} className="rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs">{t}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
