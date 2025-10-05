/**
  displayedBanners: BannerConfig[];
  handleBannerImpression: (bannerId: string) => void;
  handleBannerClick: (bannerId: string) => void;
  refreshBanners: () = > void;
  };
};

/**
 * Hookfortracking bannervisibility
 */
        if (entry.isIntersecting) {
          trackImpression(bannerId); trackBannerInteraction(bannerId'impression');
          if (onVisible) onVisible();
          observer.disconnect();
         }
      }
      {
    );

    observer.observe(element);

    return () => observer.disconnect();

  return { ref };
};

/**
 * HookforA/Btestingbanners
 */
  };
};

exportdefaultuseBannerRotation;
