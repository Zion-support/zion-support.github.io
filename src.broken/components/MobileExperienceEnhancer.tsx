
    checkDevice();
    window.addEventListener('resize', handleResize);
            }
          } else if(gesture.direction === 'right') {
        break;
      case 'menu':
    // Add touch-action CSS for better touch handling
    const style = document.createElement('style') ;
    style.textContent = `
      .mobile - device * {
        touch-action: manipulation;
        -webkit - tap - highlight - color: transparent;
      }

      .mobile - device button,
      .mobile - device [] {
        min - height: 44px;
        min - width: 44px;
      }

      .mobile - device input,
      .mobile - device select,
      .mobile - device textarea {
        font - size: 16px;
      }
    `;
            {isMobile ? <Smartphone className="w-4 h-4"  /> : <Tablet className="w-4 h-4"  />}
            <span>{isMobile ? 'Mobile' : 'Tablet'}</span>
