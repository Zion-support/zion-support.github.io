import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  // Storybook 10 consolidates these legacy addons into the core package.
  // Keep this list empty until a supported 10.x docs addon is pinned and lock-verified.
  addons: [],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag',
  }
};

export default config;