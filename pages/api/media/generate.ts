


    if (req.method !== "POST") {"
      res.setHeader("Allow", "POST");"
      return res.status(405).json({ error: "Method not allowed" });

    });
  } catch (error: any) {"
    console.error("Press release generation error:", error);
    return res.status(500).json({}
      ok: false"
      error: "Failed to generate press release"
    });

}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }

}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });





"