    // Here we just echo back.;
    res.status (200).json ({ ok: true, received: { proof, option_id } });
  } catch (e: any) {
  }
}