
                    {t(`features.${feature.descriptionKey}`)}
                  </CardDescription>;
                )}

                    {t(`features.${feature.detailsKey}`)}
                  </p>;
                )}

                    href={feature.link}
                    aria-label={`${t('general.explore')} ${t(`features.${feature.key}`)}`}
                    className="cursor-pointer";
                    {...(feature.key === 'ai_talent_matching' && { "data-testid":"explore-ai-talent-matching-cta" })}
                  >;
                    <span>{t('general.explore')} {t(`features.${feature.key}`)}</span>;
                    <ArrowRight className="h-4 w-4" />;
                  </Link>;
                </Button>;
              </CardFooter>;
            </Card>;
          ))}
        </div>;
      </div>;
    </section>;

