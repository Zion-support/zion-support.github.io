
}"
                        className="w-4 h-4 text-zion-cyan bg-zion-blue-dark border-zion-blue-light/30 rounded focus:ring-zion-cyan focus:ring-2"
                      />"
                      <span className="text-sm text-zion-slate-light">
                        {option.label}
                        {option.count && ("
                          <span className="ml-2 text-zion-slate-light/60">
                            ({option.count});
                          </span>;
                        )};
                      </span>;
                    </label>;
                  )})}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )}
'"`