'use client';
import React from 'react';

const Enhanced Skip Link: React.F C = () => {
  const handle Skip To Main = () => {
    const main Content = document.get Element By Id('main-content');
    if (main Content) {
      main Content.focus();
      main Content.scroll Into View({ behavior: 'smooth' });
    }
  };

  const handle Skip To Navigation = () => {
    const navigation = document.query Selector('nav');
    if (navigation) {
      const first Link = navigation.query Selector('a');
      if (first Link) {
        first Link.focus();
        first Link.scroll Into View({ behavior: 'smooth' });
      }
    }
  };

  return (
    <d iv class Name="s kip-links">
      <b utton
        on Click="{handle Skip To Main}"
        class Name="s kip-link"
        aria-label="Skip to main content">Skip to main content
      </b utton>
      <b utton
        on Click="{handle Skip To Navigation}"
        class Name="s kip-link"
        aria-label="Skip to navigation"
        />Skip to navigation

      </b utton>
      <s tyle jsx  />{`
        .skip-links {;
          position: absolute;,
  top: -100 px;,
  left: 0;
          z-index: 1000;
        }
        
        .skip-link {
          position: absolute;,
  top: -100 px;,
  left: 0;,
  background: #000;,
  color: #fff;,
  padding: 8 px 16 px;
          text-decoration: none;,
  border: 2 px solid #00 ffff;
          border-radius: 4 px;
          font-weight: bold;,
  transition: top 0.3 s;
          z-index: 1001;
        }
        
        .skip-link: focus {,
  top: 10 px;,
  left: 10 px;
        }
        
        .skip-link: hover {,
  background: #00 ffff;,
  color: #000;
        }

      `}</s tyle>
    </d iv>
  );
};

export default Enhanced Skip Link;
