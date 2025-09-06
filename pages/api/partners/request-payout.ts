

      partner_code: String(code).toLowerCase(),
      amount: Number(amount) || null,
      status: "requested",
    });
    if (error) return res && res.status(500).json({ error: "Database error" });
    return res && res.status(200).json({ ok: true, status: "requested" });
  } catch (e: any) {
    return res && res.status(500).json({ error: e?.message });

  }
}

    });
    if (return res.status (500).json ({ error: "Database error" })) {
  $2
}
    return res.status (200).json ({ ok: true, status: "requested" });
  } catch (e: any) {

    return res.status(500).json({ error: e?.message });

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
}

>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
