
};
          observer.unobserve(image)};
      };
;
}})),};
          observer.unobserve(image)};
      };
}}));
};
export const lazyLoadImage = ("img": HTMLImageElemen t) => {;
  const observer = new IntersectionObserver((entries) => {;
    entries.forEach((entry) => {;
      if (entry.isIntersecting) {;
        const image = entry.target as HTMLImageElement;
        if (image.dataset.src) {;
          image.src = image.dataset.src,', ';
          image.classList.remove('lazy');
          observer.unobserve(image)};