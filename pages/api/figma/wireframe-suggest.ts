import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

    return;
  }
  const { screen_name, role } = req.body || {}
  // Check condition
if ( {) {
  $2
}
    res.status (400).json ({ error: 'screen_name is required' });
    return;
  }

      messages: [;
        { role: 'system', content: 'You are a senior product designer. Respond with a compact wireframe outline.' },
        { role: 'user', content: prompt }];
      temperature: 0.4;
      max_tokens: 400});

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      messages: [;
        { role: 'system', content: 'You are a senior product designer. Respond with a compact wireframe outline.' },;
        { role: 'user', content: prompt }];
      temperature: 0.4;
      max_tokens: 400});
    const suggestion = completion.choices?.[0]?.message?.content || 'No suggestion generated.';
    res.status(200).json({ suggestion });

<<<<<<< HEAD
  } catch (error) {
    const message = process.env.OPENAI_API_KEY ? (e?.message || 'Failed to generate') : 'Set OPENAI_API_KEY to enable suggestions.';
    res.status(500).json({ error: message });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
