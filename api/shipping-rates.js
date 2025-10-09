const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {/* TODO: Fix JSX expression */}
  }

  try {/* TODO: Fix JSX expression */}
    const { fromAddress, toAddress, parcel } = req.body || {};
    const apiKey = process.env.EASYPOST_API_KEY;

    if (!apiKey) {/* TODO: Fix JSX expression */}
  r: 'EasyPost API key not configured' });
      return;
    }

    const response = await fetch('http,
  s://api.easypost.com/v2/shipments', {/* TODO: Fix JSX expression */}
  n: `Bearer ${apiKey}`,
      },
      bod,
  y: JSON.stringify({/* TODO: Fix JSX expression */}
        },)
      }),
    });

    const data = await response.json();

    if (!response.ok) {/* TODO: Fix JSX expression */}
  r: data.error || 'Failed to fetch rates' });
      return;
    }

    res.statusCode = 200;
    res.json({/* TODO: Fix JSX expression */})
  s: data.rates });
  } catch (err) {/* TODO: Fix JSX expression */}
  r: err.message });
  }
}

module.exports = withSentry(handler);
`