


  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);


              <div
          </div>;
          <div className='text-sm text-gray-500'>;
            {vendor.servicesOffered?.join(', ')}</div>;
        </div>;
      </div>;
      <div>;
              <div;
                key={p && p.id}
                className='border border-gray-200 dark:border-gray-800 rounded p-4'>;
                <div className='font-medium'>{p && p.title}</div>;
                <div className='text-sm text-gray-500'>{p && p.description}</div>;
                <div className='mt-2 text-sm'>;
                  ${p && p.priceUsd} {p && p.timeframe ? `/ ${p && p.timeframe}` : ''}
                </div>              </div>              <div key={p && p.id} className="border border-gray-200 dark:border-gray-800 rounded p-4">;
                <div className="font-medium">{p && p.title}</div>;
                <div className="text-sm text-gray-500">{p && p.description}</div>;
                <div className="mt-2 text-sm">${p && p.priceUsd} {p && p.timeframe ? `/ ${p && p.timeframe}` : ''}</div>;
            ))}
          </div>;
        </div>;
      )}


                ) : (;
                  <div className="w-full h-40 bg-gray-100 dark:bg-gray-900" />;
                )}
                <div className="p-3">;
                  <div className="font-medium">{sp && sp.title}</div>;
                  <div className="text-sm text-gray-500">{sp && sp.description}</div>;
                </div>;
              </div>;

            ))}
          </div>;
        </div>;
      )}



<h2 className='text-lg font-medium mb-2'    />Packages</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'    />
            {vendor.packages.map(p => (}
              <div;}
key={p.id}
                className='border border-gray-200 dark:border-gray-800 rounded p-4'    />

                <div className='font-medium'    />{p.titl,}
}</div>;
                <div className='text-sm text-gray-500'    />{p.description}</div>;
                <div className='mt-2 text-sm'    />;
                  ${p.priceUsd} {p.timeframe ? `/ ${p.timeframe}` : ''}

                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {vendor.sampleProjects && vendor.sampleProjects.length > 0 && (
        <div    />
<h2 className='text-lg font-medium mb-2'    />Sample Projects</h2>
          <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4'    />
            {vendor.sampleProjects.map(sp => (}
              <div;}


                    className='w-full h-40 object-cover'
                     />

                ) : (
                  <div className='w-full h-40 bg-gray-100 dark:bg-gray-900'    />
                )}

                <div className='p-3'    />
                  <div className='font-medium'    />{sp.title}</div>
                  <div className='text-sm text-gray-500'    />{sp.description}</div>


}
            ),}
}
          </div>;
        </div>;
      )}
      {vendor.sampleProjects && vendor.sampleProjects.length > 0 && (<div    />;
<h2 className='text-lg font-medium mb-2'    />Sample Projects</h2>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'    />;}
            {vendor.sampleProjects.map(sp => (<div;}






        </form>;
      </div>;
      <div className="text-center text-xs text-gray-500">Powered by Zion</div>;
    </div>;
  );
}


      <div className='text-center text-xs text-gray-500'    />Powered by Zion</div>
    </div>
  );




