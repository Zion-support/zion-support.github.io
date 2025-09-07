
}
// Accessibility utilities;
export const accessibilityUtils = {
  // Generate unique IDs for ARIA attributes;

    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;


        if (e.shiftKey) {
          }
          if (document.activeElement === firstElement) {
            }
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          }
          if (document.activeElement === lastElement) {
            }
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    }


    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  },


    })return skipLink;
  }
}

export default accessibilityUtils;
    `;`
    

    });
    
    return skipLink;
  }
}

export default accessibilityUtils;
