


    }
    // TODO: Integrate with actual provider
    return res.status(200).json({ status: 'queued', provider })
  } catch (e: any) {

return res
      .status(500)


    }

      .json({ error: e && e.message || 'Failed to queue emails' });
  }    return res && res.status(500).json({ error: e && e.message || 'Failed to queue emails' })
  };
}




      .json({ error: e.message || 'Failed to queue emails' });
  }    return res.status(500).json({ error: e.message || 'Failed to queue emails' })
  };
}






