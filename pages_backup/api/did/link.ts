




  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
(global as any).__ZION_DID_STORE__ = store;





