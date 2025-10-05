import React from 'react';
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner {...defaultProps }</RouterWrapper>
      );

      render(
        <RouterWrapper  > <UnifiedPromotionalBanner {...defaultProps }</RouterWrapper>
      );

      });
    });
  });

      ); expect(screen.getByText('Item1')).toBeInTheDocument();
      expect(screen.getByText('Item2')).toBeInTheDocument();
      expect(screen.getByText('Item3')).toBeInTheDocument();
    });

      ); expect(screen.getByText('Item1')).toBeInTheDocument();
      expect(screen.getByText('Item2')).toBeInTheDocument();
      expect(screen.queryByText('Item3')).not.toBeInTheDocument();
    });

      ); expect(screen.getByText(/category1/i)).toBeInTheDocument();
    });
  });

      render(
        <RouterWrapper  > <UnifiedPromotionalBanner 
            {...defaultProps } 
            badge = "NEW" 
      const { container  } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps}</RouterWrapper>
      );

      render(
        <RouterWrapper  > <UnifiedPromotionalBanner {...defaultProps }</RouterWrapper>
      );

    });

    it('featureditemlinks areaccessible'() => {
      constfeaturedItems = [
        {
    });

    it('handlesshowCountgreater thanitemslength'() => {
      constfeaturedItems = [
        {
        }
      ]; render(
        <RouterWrapper>
          <UnifiedPromotionalBanner 
            {...defaultProps} 
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps}</RouterWrapper>
      );

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
