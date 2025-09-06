  try {
    const body = req.body || {};
    const {
      bonusModules = {  } catch (error) {
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
    } = body;
    if (!instanceName || !deploymentRegion) {
      return res.status(400).json({
        error: 'Missing required fields: instanceName, deploymentRegion'
      });
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
    // Simulated provisioning operations – replace with real infra hooks later
    const now = new Date().toISOString();
    const provisionId = `zion-${instanceName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now()}`;
    const outputActions = {
      zionGPT: {
        initialized: true
        routes: ['/gpt/gpt/router']
        agents: ['proposal-writer', 'resume-generator']
      }
      daoAndToken: {
        token: tokenActivation ? 'ZION$' : 'disabled'
        treasury: tokenActivation ? `${provisionId}-treasury` : null
        votingDashboard: '/dao'
      }
      assets: {
        whitepaper: '/whitepaper'
        roadmap: '/roadmap'
        book: {
          pdf: '/book/manifesto.pdf'
          trailerScript: '/trailer/script'
        }
        summit: '/summit'
      }
      publicPages: []
    };
