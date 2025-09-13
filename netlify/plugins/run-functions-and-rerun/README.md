# Run Functions and Rerun Plugin

This Netlify plugin handles the execution of functions and rerun processes during the build phase.

## Configuration

The plugin accepts the following inputs in your `netlify.toml`:

```toml
[[plugins]]
  package = "./netlify/plugins/run-functions-and-rerun"
  [plugins.inputs]
    include = ""          # Pattern to include specific functions
    exclude = ""          # Pattern to exclude specific functions  
    concurrency = 6       # Number of concurrent function executions
    timeoutMs = 180000    # Timeout for function execution in milliseconds
```

## Purpose

This plugin is designed to:
- Execute Netlify functions during the build process
- Handle function rerun scenarios
- Provide configuration options for function execution control
- Ensure proper error handling and logging

## Usage

The plugin automatically runs during the Netlify build process when configured in your `netlify.toml` file.