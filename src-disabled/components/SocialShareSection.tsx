
import { useTranslation } from 'react-i18next';
export function SocialShareSection() {
  const { t } = useTranslation();
  // Current URL is not available during SSR, guard with typeof check
  const shareUrl = null;

                className={`${link.color} text-white`}
                size="sm";
                onClick={link.onClick}
                aria-label={link.name}
                title={link.name}
              >;
                {link.icon}
                <span className="sr-only">{link.name}</span>"
                <span aria-hidden="true">{link.name}</span>"
                <span className="sr-only">{link.name}</span>
                <span aria-hidden="true">{link.name}</span>
              </Button>
            ))}
          </div>;
        </div>;
      </div>;
    </section>;
  );
  navigator && navigator.clipboard.writeText (window && window.location.href) .then ( () => {;
  toast ({;
}) .catch ( () => {;
  toast ({;
  title: t ('errors && errors.failed to copy');
});
};
}</div> </div> </div> </section>) ;
}'";
}
}</div> </div> </div> </section>)
}'""
}
      name: 'Twitter','
      icon: <Twitter className='h - 5 w - 5' aria - hidden='true' />,',
      color: 'bg-[#1DA1F2] hover:bg-[#1DA1F2]/80','
      on_click: shareToTwitter,
    },
    {
      name: 'Facebook','
      icon: <Facebook className='h - 5 w - 5' aria - hidden='true' />,',
      color: 'bg-[#4267B2] hover:bg-[#4267B2]/80','
      on_click: shareToFacebook,
    },
    {
      name: 'LinkedIn','
      icon: <Linkedin className='h - 5 w - 5' aria - hidden='true' />,',
      color: 'bg-[#0077B5] hover:bg-[#0077B5]/80','
      on_click: shareToLinkedIn,
    },
    {
      name: 'Copy Link','
      icon: <Link className='h - 5 w - 5' aria - hidden='true' />,'
      color: 'bg - zion - blue - dark hover:bg - zion - blue - dark / 80','
      on_click: copyLinkToClipboard,
    },
  ];
  return (
    <section className='py - 12 bg - zion - blue'>;
      <div className='container mx - auto px - 4 sm:px - 6 lg:px - 8'>;
        <div className='max - w-4xl mx - auto flex flex - col md:flex - row items - center justify - between gap - 6 bg - zion - blue - light border border - zion - purple / 20 rounded - lg p - 6'>;
          <div>;
            <h3 className='text - xl font - bold text - white mb - 2'>;
              Share Zion with Your Network;
            </h3>;
            <p className='text - zion - slate - light'>;
              Help others discover the future of AI & tech marketplace;
            </p>;
          </div>;
          <div className='flex flex-wrap gap-3'>;
            {shareLinks && shareLinks.map((link, index) => (              <Button
                key = {index,}
                className={`${link && link.color} text-white`}
                size='sm'
                onClick={link && link.onClick}
                aria-label={link && link.name}
                title={link && link.name}>;
                {link && link.icon}
                <span className='sr-only'>{link && link.name}</span>;
                <span aria-hidden='true'>{link && link.name}</span>;
              </Button>;
            ))}
          <div className='flex flex - wrap gap - 3'>;
            {share_links.map ((link, index) => (              <Button;
                key = {index, }
                className={`${link.color} text - white`}`
                size='sm';
                on_click={link.on_click}
                aria - label={link.name}
                title={link.name}              >;
                {link.icon}
                <span className='sr - only'>{link.name}</span>;
                <span aria - hidden='true'>{link.name}</span>;
              </Button>))}
          </div>;
        </div>;
      </div>;
    </section>);
  navigator.clipboard.write_text (window.location.href) .then ( () => {
  toast ({
}) .catch ( () => {
  toast ({
  title: t ('errors.failed to copy');
});
}
}</div> </div> </div> </section>);
}'";
}
;)))
}
;
;
}</div> </div> </div> </section>)
}'"
origin/cursor/automate-test-improve-and-merge-code-2533
