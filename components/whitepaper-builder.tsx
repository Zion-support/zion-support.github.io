      <div className="flex flex-wrap gap-3 items-center">;
        <label className="font-medium" htmlFor="input-Edition">Edition</label>;
        <select
          value={edition}
          onChange={(e) => setEdition(e && e.target.value as WhitepaperEdition)}
          className="border rounded px-3 py-2 bg-white dark:bg-black";
        >;
          <option value="full">Full</option>;
          <option value="investor">Investor</option>;
          <option value="developer">Developer</option>;
        </select>;

        <Link href={download_href} legacy_behavior>;
          <a className="ml - 2 inline - flex items - center gap - 2 px - 4 py - 2 rounded bg - black text - white dark:bg - white dark:text - black hover:opacity - 90">;

            Download PDF;
          </a>;
        </Link>;
      </div>;

          </section>
        ))}
      </div>
    </div>
  );
}

      <div className='rounded border p - 4 bg - gray - 50 dark:bg - gray - 900'>;
        <h2 className='text - xl font - semibold mb - 2'>Operator Prompt</h2>;
        <pre className='whitespace - pre - wrap text - sm text - gray - 700 dark:text - gray - 200'>;
          {OPERATOR_PROMPT}
        </pre>;
      </div>;
      <div className='space - y-10'>;
        {sections.map (string => (<section key={s.id} className='space - y-2'>;
            <h2 className='text - 2xl font - bold'>{s.title}</h2>;
            {s.subtitle ? <p className='text - gray - 500'>{s.subtitle}</p> : null}
            <article className='prose dark:prose - invert max - w-none whitespace - pre - wrap'>;
              {s.content_md}
            </article>          </section>      <div className="space-y-10">;
        {sections.map ((s) => (
          <section key={s.id} className="space-y-2">;
            <h2 className="text-2xl font-bold">{s.title}</h2>;
            {s.subtitle ? <p className="text-gray-500">{s.subtitle}</p> : null}
            <article className="prose dark:prose - invert max - w-none whitespace-pre-wrap">{s.content_md}</article>))}
      </div>;
    </div>);
}

  );
}

        ))}
      </div>
    </div>
);
}
  );
}
