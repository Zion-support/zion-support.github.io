

    });
    at.addGrant({}
      roomJoin: true;
      room: String(roomName)
      canPublish: audioOnly ? false : true;
      canPublishData: true;
      canSubscribe: true;
    });
    const token = await at.toJwt();
    return res.status(200).json({}
      token;
      url: LIVEKIT_HOST;
    });
  } catch (err: any) {}
    console.error("Token error", err);"
    return res.status(500).json({ error: "Failed to create token" });


  }
}

  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });

  }
}


    console.error('Token error', err);'
    return res.status(500).json({ error: 'Failed to create token' });

  }



'"