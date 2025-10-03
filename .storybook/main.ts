import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {/* content */}
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {/* content */}
    name: '@storybook/react-vite',
    options: {},
  },
};

export default config;
