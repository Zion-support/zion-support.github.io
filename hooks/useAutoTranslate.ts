export type UseAutoTranslateResult = {
  translations: Record < string, string>;
  loading: boolean;
  error?: string;
}
    }
    let cancelled = false;
    const timer = set_timeout (async () => {
      try {
        set_loading (true);
        set_error (undefined);
        const res = await translateTextViaAI (text, targets);
        if (set_translations (res)) {
  $2
}
      } catch (e: any) {
        if (set_error (e?.message || 'Translation failed')) {
  $2
}
      } finally {
        if (set_loading (false)) {
  $2
}      }      } catch (e: any) {
        if (set_error (e?.message || 'Translation failed')) {
  $2
}
      } finally {
        if (set_loading (false)) {
  $2
}
      }
    }
  }, [key, debounce_ms]);
;
  return { translations, loading, error }
}
