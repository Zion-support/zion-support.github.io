<<<<<<< HEAD
<<<<<<< HEAD
// API endpoint for shipping rates
<<<<<<< HEAD
  let rates = [];  try {
        const data = fs.readFileSync(file, 'utf8");
  
  } catch (error) {
    console.error(error);
  };";
  }};";";
  } catch (error) {}";";";
    console.error('Error:", error);}";";";
    console.error('Error reading existing rates:", error);};";";
  }";";";
  const distanceMultiplier = destination ="==" 'US" ? 1: 2;
  const baseRate = 10;
  const rate = baseRate + (weight * 0.5 * distanceMultiplier);
  try {
    const newRate  =  {,
      id: Date.now().toString(),
      destination,
  
  } catch (error) {
    console.error(error);
  };
    console.error(error);
  };";
    rates.push(newRate);";";
    fs.writeFileSync(file, JSON.stringify(rates, null, 2));";";";
    res.setHeader('Content-Type', 'application/json');"
    res.end(JSON.stringify({";
    success: true,";";
      rate: rate,";";";
      message: 'Shipping rate calculated successfully' "
  ";
  }));";";
  } catch (error) {";";";
    console.error('Error: ",";";";
    error);'
    res.setHeader('Content-Type', 'application/json');'
    res.end(JSON.stringify({ error: 'Failed to save rate" ";";
";";";
  }));"
  }";";";
}"
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      origin, 
      destination, 
      weight, 
      dimensions, 
      serviceType 
    } = req.body;

<<<<<<< HEAD
    if (!country) {
      return res.status(400).json({ error: 'Country is required' });
    }

    // Mock shipping rates calculation
    const baseRate = 10;
    const weightMultiplier = (weight || 1) * 0.5;
    const countryMultiplier = country === 'US' ? 1 : 1.5;
=======
    if (!origin || !destination || !weight) {
      return res.status(400).json({ 
        error: 'Origin, destination, and weight are required' 
      });
    }

    // Mock shipping rates calculation
    // In a real application, you would integrate with shipping APIs
    const baseRate = 10;
    const weightMultiplier = parseFloat(weight) * 0.5;
    const distanceMultiplier = 1.2; // Mock distance calculation
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
    
    const rates = [
      {
        service: 'Standard',
<<<<<<< HEAD
        cost: Math.round((baseRate + weightMultiplier) * countryMultiplier * 100) / 100,
        days: '5-7 business days'
      },
      {
        service: 'Express',
        cost: Math.round((baseRate + weightMultiplier) * countryMultiplier * 1.5 * 100) / 100,
        days: '2-3 business days'
      },
      {
        service: 'Overnight',
        cost: Math.round((baseRate + weightMultiplier) * countryMultiplier * 2 * 100) / 100,
        days: '1 business day'
=======
        cost: Math.round((baseRate + weightMultiplier) * distanceMultiplier * 100) / 100,
        estimatedDays: '3-5'
      },
      {
        service: 'Express',
        cost: Math.round((baseRate + weightMultiplier) * distanceMultiplier * 1.5 * 100) / 100,
        estimatedDays: '1-2'
      },
      {
        service: 'Overnight',
        cost: Math.round((baseRate + weightMultiplier) * distanceMultiplier * 2 * 100) / 100,
        estimatedDays: '1'
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
      }
    ];

    res.status(200).json({ 
      success: true,
      rates,
      origin,
      destination,
      weight
    });
  } catch (error) {
    console.error('Shipping rates error:', error);
<<<<<<< HEAD
    res.status(500).json({ error: 'Failed to calculate shipping rates' });
  }
}
<<<<<<< HEAD
>>>>>>> main
=======
    res.status(500).json({ 
      error: 'Failed to calculate shipping rates',
      message: error.message 
    });
  }
}
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
=======
export default function handler(req, res) {
  res.status(200).json({ message: 'API endpoint' });
}
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1
