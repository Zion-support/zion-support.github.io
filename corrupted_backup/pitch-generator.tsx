import React, { useState } from 'react';
import Head from 'next/head';

interface Slide {
  id: string;
  title: string;
  content: string;
  chart?: {
    type: string;
    data: Array<{ label: string; value: number }>;
  };
}

  return (
    <>
      <Head>
        <title>Pitch Generator - Admin</title>
        <meta name="description" content="Generate pitch decks and presentations" />
      </Head>

                Drag & drop logos, photos here
                <div className='text-xs mt-1'>
                  {builder.assets.length} file(s) added
                </div>
              </div>
            </div>

              </div>
            </div>

            {/* Active Slide Editor */}
            {activeSlide && (

                  >
                    Bar Chart
                  </button>
                  <button

                  >
                    Funnel
                  </button>
                  <button

                  >
                    Timeline
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );

